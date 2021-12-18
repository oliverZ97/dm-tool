export default function BlogCard() {
    return (
      <div className="bg-tertiary rounded-lg flex flex-row justify-between h-60 overflow-hidden">
          <img className="h-full w-40p object-cover object-center rounded-tl-lg rounded-bl-lg" src="https://source.unsplash.com/random"></img>
          <div className="flex-grow p-4 ">
          <p className="text-lg font-bold">Ich bin eine Blogcard</p>
          <span className="text-primary text-xs">18.12.2021</span>
          <p className="text-md text-ellipsis">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>

      </div>
    );
  }