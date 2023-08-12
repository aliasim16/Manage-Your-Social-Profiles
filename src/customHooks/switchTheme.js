import { useState } from "react";

export default function switchTheme(){
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ||
        document.documentElement.dataset.bsTheme || 
        "light"
    )
    
      const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.dataset.bsTheme = newTheme
      }
      return [theme, switchTheme]
}