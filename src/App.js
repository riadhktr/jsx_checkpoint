import image from './imageInSrc.jpg';
import video from './intro.mp4';
import './Style.css';

function App() {
return (
<>
<div  style={{ border: 'solid 1px black', maxWidth: '100vw' }}>

 <h1 className="title red">Keep Trying !</h1>


<div className='pictures'>
 <img className='images' src={image} alt="imgsrc" />

 <img className='images' src="./imageInPublic.jpg" />
 
</div>
        
</div>

<video className="vid" width="320" height="240" controls>

 <source src={video} type="video/mp4" />

</video>

</>
  );
}

export default App;
