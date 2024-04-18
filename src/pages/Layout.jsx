const Layout = ({ children }) => {
  return( 
  <div className="relative bg-gradient-to-r from-neutral-50 from-30% via-neutral-200 via-50% to-neutral-500 w-full min-h-screen md:pt-40 md:pb-12 md:px-12 max-md:p-8 grid justify-center">
    <div className="md:max-w-[1200px] md:min-w-[700px]  ">
      {children}
    </div>
  </div>
)
};
export { Layout };
