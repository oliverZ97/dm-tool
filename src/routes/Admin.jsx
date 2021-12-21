import Dropzone from "../components/Dropzone";

export default function Admin() {
    const setBlogentry = () => {

    }

    return (
      <main >
        <h2 className="mb-4 text-xl">Beitrag hinzufügen</h2>

        <form>
          <div className="flex flex-col">
            <input type="text" id="title" placeholder="Title" className="mb-4 p-4 rounded-lg"></input>
            <textarea id="text" placeholder="Text" className="mb-4 p-4 rounded-lg"></textarea>
            <Dropzone></Dropzone>
          </div>
          <div>
          <button onClick={setBlogentry}>Speichern</button>
          </div>
        </form>
      </main>
    );
  }