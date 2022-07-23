import {
  useNavigation,
  NavigationContainerProps,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../@types/stack-routes";

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export function useNavigate() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return navigation;
}
