import "./App.css";

import ImageGallery from "../src/Gallery/ImageGallery";
import Login from "../src/Login/Login";

const App = () => {
  return (
    <div className="div">
      <Login
        onLogin={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ImageGallery
        images={[
          "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      />
    </div>
  );
};

export default App;
