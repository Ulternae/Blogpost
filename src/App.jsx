import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthRoute, AuthRouteCreate } from "./utilities/auth";
import "./styles.css";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./pages/NotFound";
import { BlogPost } from "./pages/BlogPost";
import { LogoutPage } from "./pages/LogoutPage";
import { LoginPage } from "./pages/LoginPage";
import { BlogCreate } from "./pages/BlogCreate";
import { ProfilesAll } from "./pages/ProfilesAll";
import { ProfilesUser } from "./pages/ProfilesUser";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/logout"
            element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            }
          />
          <Route path="/profiles" element={<ProfilesAll />}/>
          <Route path="/profiles/:user" element={<ProfilesUser />} />

          <Route
            path="/create"
            element={
              <AuthRouteCreate>
                <BlogCreate />
              </AuthRouteCreate>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
