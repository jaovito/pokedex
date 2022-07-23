import { Status } from "../@types/pokemon";

export function formatMoves(move: Status) {
  switch (move.stat.name) {
    case "hp":
      return "HP";
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SATK";
    case "special-defense":
      return "SDEF";
    case "speed":
      return "SPD";
    default:
      return "";
  }
}
