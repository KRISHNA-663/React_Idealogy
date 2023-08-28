function App() {
  function Namechange()
  {
    const name = ["Aravinth","Neke","Jegan"];
    const int =Math.floor(Math.random()*3);
    return name[int];
  }
  return (
    <div>
     <center> Hi my name is KRISHNA.
      <p>My best friend is {Namechange()}</p>
     </center>
    </div>
  );
}

export default App;
