
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between px-5 py-3 border-b-2 font-extrabold">
        <h1 className="text-2xl font-mono">PetBuddy</h1>
        <div className="flex gap-5">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact us</h3>
            <h3>Inform us about pet</h3>
        </div>
    </nav>
    </>
  )
}

export default Navbar