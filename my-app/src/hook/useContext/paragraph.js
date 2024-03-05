import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Paragraph() {
  const context = useContext(ThemeContext);
  return <p className={context.theme}>Hello guys</p>;
}
export default Paragraph;
