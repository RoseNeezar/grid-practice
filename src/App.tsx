import React from "react";
import Layout from "./App/layout";
import Sidebar from "./App/features/sidebar";
import Header from "./App/features/header";
import Realtors from "./App/features/realtors";
import Services from "./App/features/services";
import Homes from "./App/features/homes";
import Gallery from "./App/features/gallery";
import Footer from "./App/features/footer";
import StoryPictures from "./App/features/story/StoryPictures";
import StoryContent from "./App/features/story/StoryContent";

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Header />
      <Realtors />
      <Services />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </Layout>
  );
};

export default App;
