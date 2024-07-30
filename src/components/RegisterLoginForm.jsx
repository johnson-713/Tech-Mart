// eslint-disable-next-line react/prop-types
export const RegisterLoginForm = ({ isLogin = false }) => {
  return (
    <div className="flex gap-[200px] px-[120px] py-[50px]">
      <div className="flex justify-center items-center">
      <img src="/images/login.png" alt="" className="max-h-[380px]" />
      </div>
      <div>
        <p className="text-[28px] text-[#1ABA1A] font-bold">{isLogin ? "Welcome Back" : "Register"}</p>
        <p className="text-[14px] text-[#999999]">{isLogin ? "Login to continue" : "Join to us"}</p>
        {!isLogin && (
          <div className="flex flex-col gap-[6px] mt-[25px]">
            <label className="text-[14px]">Your Name</label>
            <input className="border-[#CCCCCC] w-[400px] border p-[10px] rounded-md" placeholder="John Doe" name="username" />
          </div>
        )}
        <div className="flex flex-col gap-[6px] mt-[25px]">
          <label className="text-[14px]">Email Address</label>
          <input className="border-[#CCCCCC] w-[400px] border p-[10px] rounded-md" placeholder="johndoe@gmail.com" name="email" />
        </div>
        <div className="flex flex-col gap-[6px] mt-[25px]">
          <label className="text-[14px]">Password</label>
          <input className="border-[#CCCCCC] w-[400px] border p-[10px] rounded-md" placeholder="*******" name="password" />
        </div>
        {!isLogin && (
          <div className="flex flex-col gap-[6px] mt-[25px]">
            <label className="text-[14px]">Confirm Passw ord</label>
            <input className="border-[#CCCCCC] w-[400px] border p-[10px] rounded-md" placeholder="*******" name="confirm_password" />
          </div>
        )}
        <button className="bg-[#1ABA1A] text-[#fff] py-[15px] px-[40px] rounded-xl mt-[40px]">{isLogin ? 'LOGIN' : 'REGISTER'}</button>
        <p className="text-[13px] text-[#999999] mt-[8px]">{isLogin ? 'New User?' : 'Already User?'}<a className="text-[#1ABA1A]" href={isLogin ? '/register' : '/login'}>{isLogin ? 'SIGN UP' : 'LOG IN'}</a></p>
      </div>
    </div>
  );
};
