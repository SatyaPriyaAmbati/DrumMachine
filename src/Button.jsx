
import styles from "./App.module.css";
function Button({displayValue,setPlayValue})
{
  const Buttonname = ["Q","W","E","A","S","D","Z","X","C"];
 
  const handleClick = (iterator) => {
    if (iterator === 'Q') {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
      audio.play();
      displayValue=setPlayValue("HEATER1");
    }
    if(iterator === 'W')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
      audio.play();
      displayValue=setPlayValue("PEACE");
    }
    if(iterator === 'E')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
      audio.play();
      displayValue=setPlayValue("CLAP");
    }
    if(iterator === 'A')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
      audio.play();
      displayValue=setPlayValue("HEATER3");
    }
    if(iterator === 'S')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
      audio.play();
      displayValue=setPlayValue("HEATER4");
    }
    if(iterator === 'D')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
      audio.play();
      displayValue=setPlayValue("OPEN-HH");
    }
    if(iterator === 'Z')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
      audio.play();
      displayValue=setPlayValue("KICK");
    }
    if(iterator === 'X')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
      audio.play();
      displayValue=setPlayValue("CLOSED-HH");
    }
    if(iterator === 'C')
    {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
      audio.play();
      displayValue=setPlayValue("KICK-N-HAT");
    }
    
  }
  return(
    <div>
      <div className={styles.buttonContainer}>
        {Buttonname.map((iterator) => (
          <button className={styles.buttons} onClick={() => handleClick(iterator)} key={iterator}>
            {iterator}
          </button>
        ))}
      </div>
    </div>
  );

}
export default Button;