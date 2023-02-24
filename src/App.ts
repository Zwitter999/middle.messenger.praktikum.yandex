import Header from './ui/components/Header/Header';
import Block from './ui/utils/Block';

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';

  root.append(block.getContent()!);

  return root;
}

function App() {
  render('header', new Header());
}

export default App;
