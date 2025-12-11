const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors duration-200";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
