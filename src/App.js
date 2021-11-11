import './App.css';
import Collapse from './components/Collapse';

function App() {
  return (
    <Collapse
      collapsedLabel='Подробнее'
      expandedLabel='Скрыть'
      isExpanded={false}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius libero quis odio aliquet, vel posuere odio pulvinar. Sed urna nibh, pretium ut sodales in, vestibulum eu eros. Duis sollicitudin sagittis felis, eget lobortis tellus venenatis iaculis. Mauris vel metus tortor. Nulla in lacus sodales, maximus purus aliquam, lobortis ex. Donec tempus massa at cursus condimentum. Duis suscipit ac nunc sit amet pretium. In ante leo, sollicitudin at volutpat id, gravida non felis. Morbi vehicula arcu a lorem convallis auctor. Aenean nibh mi, aliquam fermentum ante ac, mattis mattis lorem. Quisque rhoncus magna eget vehicula gravida.
      </p>
    </Collapse>
  );
}

export default App;
