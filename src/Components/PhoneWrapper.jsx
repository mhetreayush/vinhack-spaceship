const PhoneWrapper = ({ children }) => {
  return (
    <div>
      <div className="md:hidden">{children}</div>
      <div className="hidden md:flex w-full h-screen items-center justify-center">
        Please view on Phone
      </div>
    </div>
  );
};
export default PhoneWrapper;
