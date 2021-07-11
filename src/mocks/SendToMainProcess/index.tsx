/**
 * SendToMainProcess
 */
export function SendToMainProcess() {
  function handleSayHello() {
    window.Main.sendMessage("Hello World");

    console.log("Message sent! Check main process log in terminal.");
  }

  return (
    <button
      style={{ position: "fixed", bottom: 0, left: "47%" }}
      onClick={handleSayHello}
    >
      Send message to main process
    </button>
  );
}
