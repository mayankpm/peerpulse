

function App() {

  return (
    <div className="w-screen h-screen bg-red-300 underline">
      Hello World
      <label className="swap swap-flip text-9xl">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  <div className="swap-on">😈</div>
  <div className="swap-off">😇</div>
</label>
    </div>
    
  )
}

export default App
