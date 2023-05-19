import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* BANNER */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isRow />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isRow
      />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} isRow />
    </div>
  );
}

export default App;
