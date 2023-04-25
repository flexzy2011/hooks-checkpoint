import './App.css';
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";



function App() {


  // creating a default movie list 
  const [movies, setMovies] = useState([
    {
      title: `When They See Us`,
      description: `When They See Us is a 2019 American crime drama television miniseries created, co-written, and directed by Ava DuVernay for Netflix, that premiered in four parts on May 31, 2019. It is based on events of the 1989 Central Park jogger case and explores the lives and families of the five Black and Latino male suspects who were falsely accused then prosecuted on charges related to the rape and assault of a white woman in Central Park, New York City. The series features an ensemble cast, including Jharrel Jerome, Asante Blackk, Jovan Adepo, Michael K. Williams, Logan Marshall-Green, Joshua Jackson, Blair Underwood, Vera Farmiga, John Leguizamo, Felicity Huffman, Niecy Nash, Aunjanue Ellis, Marsha Stephanie Blake, and Kylie Bunbury`,
      imgSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_Vvk0h2_Ktr-ljWQgA6J5jKMUbsLlEyN-g&usqp=CAU',
      rating: 7.5
    },
    {
      title: `Prey`,
      description: `This horror-thriller from Blumhouse & Hyde Park with Director Franck Khalfoun (Amityville: The Awakening) follows Toby (Logan Miller) as he must survive an island retreat while a sinister force hunts him, leaving bodies in its wake.`,
      imgSrc: 'https://m.media-amazon.com/images/I/71Dgjbdg7oL._AC_UY327_FMwebp_QL65_.jpg',
      rating: 4.0
    },
    {
      title: `Shawshank Redemption`,
      description: `The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. The film tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis "Red" Redding (Morgan Freeman), and becomes instrumental in a money laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.`,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FEhiTq_HO-_ezUQgeTVa0_uledIeaVWOgQ&usqp=CAU',
      rating: 9.5
    },
    {
      title: `The Hate U Give`,
      description: `The Hate U Give is a 2018 American drama[4] film co-produced and directed by George Tillman Jr. from a screenplay by Audrey Wells (who died the day before the film's release), based on the 2017 young adult novel of the same name by Angie Thomas.`,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbKGV3PC7gh0nwwUu7oQDsj1rc2X5Gw86Gw&usqp=CAU',
      rating: 5.0
    },
    {
      title: `Blue Story`,
      description: `Blue Story is a 2019 British musical crime drama film written, directed, and narrated by Rapman (Andrew Onwubolu) through the medium of rap and starring Stephen Odubola and Micheal Ward, with Eric Kofi-Abrefa, Khali Best, Karla-Simone Spence, Richie Campbell, Jo Martin and Junior Afolabi Salokun in supporting roles`,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxJoS7TeI7Oik012VXl6610gd-WDn6sa-4w&usqp=CAU',
      rating: 5.0
    },
    {
			title: "Captain Marvel",
			description: "Brie Larson as Carol Danvers / Vers / Captain Marvel: An ex-U.S. Air Force fighter pilot and member of an elite Kree military unit called Starforce. She was imbued with superhuman strength, energy projection, and flight after exposure to Tesseract energy.",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hm3jpoL8KMXEpc9Cww6lymKCO5ud8LJWsg&usqp=CAU",
			rating: 5.0
		},
		{
			title: "Spider-Man: Far From Home",
			description: "Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfLbS3HDTXpDlnwaSK0j3-rZFZBudumcyzw&usqp=CAU" ,
			rating: 4.0
		},	
		{
			title: "Alita: Battle Angel",
			description: "Alita: Battle Angel is a 2019 American cyberpunk action film based on Yukito Kishiro's manga series Gunnm (or Battle Angel Alita in English). It was directed by Robert Rodriguez, produced by James Cameron and Jon Landau, and written by Cameron and Laeta Kalogridis.",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8dJz-wFSNtx0KncRBrA-oQ0FU3tXojbg4g&usqp=CAU" ,
			rating: 2.0
		},	
		{
			title: "Spider-Man: Into the Spider-Verse",
			description: "Spider-Man: Into the Spider-Verse is a 2018 American computer-animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Pictures and Sony Pictures Animation in association with Marvel Entertainment. Distributed by Sony Pictures Releasing, it is the first animated film in the Spider-Man franchise.",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBf6TPymOoPEYAGcPPeKZl7O_36gfGPOAYQ&usqp=CAU" ,
			rating: 3.0
		}

  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);


  const handleFilterTitle = (input) => {setFilterTitle(input.target.value)};

  const handleFilterRate = (input) => {setFilterRate(parseFloat(input.target.value))};

  const handleAddMovie = () => {
    const NewMovie = {
      title: 'New Movie',
      description: 'A new movie has been added to the list',
      imgSrc: 'https://via.placeholder.com/150',
      rating: 1.0
    };
    setMovies([...movies, NewMovie])
  }

  return (
    <div className="App">
      <h1>FLEXZY MOVIE APP</h1>
      
      <button className="addButton" onClick={handleAddMovie} >Add movie</button>

      <Filter 
        filterByRate={handleFilterRate}
        filterByTitle={handleFilterTitle}
      />

      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate} />
    </div>

  );
}

export default App;
