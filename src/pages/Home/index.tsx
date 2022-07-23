import { ActivityIndicator, Alert, FlatList } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PokemonCard } from "../../components/PokemonCard";
import { api } from "../../services/api";
import { Pokemon } from "../../@types/pokemon";
import { useNavigate } from "../../hooks/useNavigate";

export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingRefresh, setLoadingRefresh] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const navigation = useNavigate();

  const handleGetPokemons = useCallback(async () => {
    setLoading(true);
    const response = await api.get(`pokemon?offset=${offset}`);

    const data = await Promise.all(
      response.data.results.map(async (pokemon: any) => {
        const pokemonResponse = await api.get(`/pokemon/${pokemon.name}`);
        return pokemonResponse.data;
      })
    );

    setPokemons((state) => [...state, ...data]);
    setOffset((state) => state + 20);
    setLoading(false);
  }, [offset]);

  async function handleResetPokemons() {
    setOffset(0);
    setLoading(true);
    setLoadingRefresh(true);

    try {
      const response = await api.get(`pokemon?offset=0`);

      const data = await Promise.all(
        response.data.results.map(async (pokemon: any) => {
          const pokemonResponse = await api.get(`pokemon/${pokemon.name}`);
          return pokemonResponse.data;
        })
      );

      setPokemons(data);
    } catch {
      Alert.alert(
        "Erro ao buscar pokémons",
        "Não foi possível recuperar os pokémons, verifique se a PokéAPI está no ar!"
      );
    } finally {
      setLoading(false);
      setLoadingRefresh(false);
    }
  }

  const handleSearchPokemon = useCallback(async () => {
    setLoading(true);
    try {
      const pokemonResponse = await api.get(`/pokemon/${search.toLowerCase()}`);

      setPokemons([pokemonResponse.data]);
    } catch {
      Alert.alert(
        "Pokémon não encontrado",
        "Não encontramos nenhum pokémon com este nome, o nome precisa estar igual ao de um pokémon existente"
      );
      handleResetPokemons();
    } finally {
      setLoading(false);
    }
  }, [search]);

  function handleNavigateToPokemonScreen(pokemon: Pokemon) {
    navigation.navigate("Pokemon", pokemon);
  }

  useEffect(() => {
    handleGetPokemons();
  }, []);

  return (
    <Container>
      <Header />

      <Input
        placeholder="Pesquisar"
        value={search}
        onChangeText={setSearch}
        onSearch={handleSearchPokemon}
        autoCorrect={false}
      />

      <FlatList
        data={pokemons}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onClick={() => handleNavigateToPokemonScreen(item)}
          />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          marginTop: 8,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        onEndReachedThreshold={0.5}
        onMomentumScrollEnd={
          pokemons.length > 18 ? handleGetPokemons : undefined
        }
        refreshing={loadingRefresh}
        onRefresh={handleResetPokemons}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </Container>
  );
};
