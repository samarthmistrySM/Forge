import { Box } from 'ink';
import { Chat, Footer, Header, Input } from './components/index.js';

const App = () => (
  <Box flexDirection="column" gap={1}>
    <Header />
    <Chat />
    <Input />
    <Footer />
  </Box>
);

export default App;
