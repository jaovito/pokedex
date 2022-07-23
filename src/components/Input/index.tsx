import { useRef } from "react";
import { TextInput as RNInput, TextInputProps } from "react-native";
import { Container, Icon, TextInput, Button, ButtonText } from "./styles";

type Props = TextInputProps & {
  onSearch?: () => void;
};

export const Input = ({ value, onSearch, ...rest }: Props) => {
  const inputRef = useRef<RNInput>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <Container>
      <Icon name="search" onPress={handleFocus} />

      <TextInput ref={inputRef} value={value} {...rest} />

      {value !== "" && (
        <Button onPress={onSearch} activeOpacity={0.8}>
          <ButtonText>Buscar</ButtonText>
        </Button>
      )}
    </Container>
  );
};
