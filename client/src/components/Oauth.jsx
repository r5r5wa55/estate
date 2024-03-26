

export default function Oauth() {

  const handleSubmit =async()=>{
    try {
      console.log('we');
    } catch (error) {
      console.log(`could not sign in with google`);
    }

  }

  return (
    <button 
      type="button"
      onClick={handleSubmit}
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 text-center'>
      Login with Google
    </button>
  )
}
