import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 mx-4 border-b-4'>
      <h1 className='text-2xl'>knowledge cafe</h1>
      <img src={profile} alt="" />
    </div>
  )
}

export default Header
