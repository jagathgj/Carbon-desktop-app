import { Content, Stack } from "@carbon/react";
import "./App.scss";
import HeaderBar from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Content>
        <Stack gap={6}>
          <span>Content belongs here.</span>
          <span className="helper-text">This font is the helper font</span>
        </Stack>
      </Content>
    </div>
  );
}

export default App;
