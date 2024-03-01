import { auth, signOut } from '@/../auth'
import Link from 'next/link'





const SettingsPage = async () => {
    const session = await auth()

    return (
        <div>
            <div className='mx-24 mt-11' >
            <Link href="/"><button className=' bg-slate-800 font-bold text-slate-50 hover:bg-slate-600 rounded-lg w-60 h-12' >
                  Back to Home  

                    </button></Link>   
            </div>
            {/* {JSON.stringify(session)} this if for if we we wana show
          the whole session*/}
            <form action={async () => {
                "use server"
                await signOut()



            }}>
                <div className='flex flex-col gap-6 items-center justify-center m-10'>
                    <div>

                        <img src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"} alt='user image' />
                    </div>
                    <p><span className=' font-bold'>User Name : </span>{session?.user.name}</p>
                    <p><span className=' font-bold'>User Email : </span>{session?.user.email}</p>
                    <button className=' bg-slate-400 font-bold hover:bg-slate-600 rounded-lg w-24 h-10' type='submit'>
                        SignOut

                    </button>
                </div>

            </form>
        </div>
    )
}
export default SettingsPage