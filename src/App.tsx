import { SendToMainProcess } from "./mocks/SendToMainProcess";
import { DragAndDropMe } from "./pages/DragAndDropMe";

export function App() {
  return (
    <>
      <DragAndDropMe />
      <SendToMainProcess />
    </>
  );
}
