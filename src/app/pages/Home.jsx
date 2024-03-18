import Welcome from '../components/Welcome/Welcome';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
      <NavBar />
      <h1>This is a title</h1>
      <div>This is an image hosted on my server</div>
      <br></br>
      <img src="src\app\Assets\react.webp" width="1080" height="720"></img>
      <div>This is an image hosted on the web</div>
      <br></br>
      <img
        src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
        width="1080"
        height="720"
      ></img>
      <br></br>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ZO_uOxI_44oorYNP"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Footer />
    </div>
  );
}

export default Home;
