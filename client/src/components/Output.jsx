const Output = ({ output }) => {
    return (
      <div className="mt-4 p-3 bg-gray-800 rounded-lg text-white">
        <h3 className="font-bold mb-2">Output:</h3>
        <pre>{output}</pre>
      </div>
    );
  };
  
  export default Output;
  