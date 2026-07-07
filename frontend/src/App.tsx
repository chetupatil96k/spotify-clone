import { Button } from "./components/ui/button";
import "./index.css";

import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";

function App() {
  return (
    <header>
      <Show when="signed-out">
        <SignInButton>
          <Button>
            Sign In
          </Button>
        </SignInButton>
         
        <SignUpButton >
          <Button>
            Sign Up
          </Button>
        </SignUpButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </header>
  );
}

export default App;