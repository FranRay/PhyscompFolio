<template class = "color">
      <nav ref={dockRef} className="dock">
        <ul>
          <li className="app gap" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/C-AboutMe.png"/>
              <span className="tooltip">About Me</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/C-GraphicDesign.png" />
              <span className="tooltip">Graphic Design</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/C-UXUI.png" />
              <span className="tooltip">UX/UI</span>
            </a>
          </li>
          <li className="app gap" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/C-OtherWork.png" />
              <span className="tooltip">Other Work</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.linkedin.com/in/franraymundo" target="_blank">
              <img src="../images/icons/C-LinkedIn.png" />
              <span className="tooltip">LinkedIn</span>
            </a>
          </li>
          <li className="app gap" onMouseMove={handleAppHover}>
            <a href="https://www.behance.net/franraymundo" target="_blank">
              <img src="../images/icons/C-Behance.png" />
              <span className="tooltip">Behance</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a @click="$emit('color-toggle')">
              <img src="../images/icons/C-ToggleTheme.png" />
              <span className="tooltip">Toggle Theme</span>
            </a>
          </li>
        </ul>
      </nav>
</template>
    
<style scoped lang = "scss">
  .dock {
    transform: scale(20px);
    margin: auto auto -0.1em auto;
    padding: 0 2em;
    background-color: var(--clr-accent);
    border: 4px solid var(--clr-primary);
    transform: perspective(10px) rotateX(1.5deg);
    
  }

  .dock ul {
    margin-top: -3.25em;
    display: flex;
    list-style-type: none;
    padding: 0;
    transform: perspective(11px) rotateX(-1.5deg);
  }

  nav {
      .app {
        display: flex;
        transition: width, height, margin-top, cubic-bezier(0.25, 1, 0.5, 1) 100ms;
        width: 90px;
        height: 90px;
        position: relative;
        padding-inline: 0.35em;

        img {
          width: fit-content;
          height: 100%;
        }

        a {
          display: flex;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          color: var(--clr-text-2);

          justify-content: center;
          align-items: center;
        }
      }

      .app:hover .tooltip,
      .app:focus-within .tooltip {
        opacity: 1;
      }

      .tooltip {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: ease-in opacity 500ms;
        display: block;
        background: var(--clr-accent);
        padding-inline: 0.75em;
        border-radius: 0.25em;
        height: 1.5em;
        width: auto;
        white-space: nowrap;
      }

      // app animation related

      .app:hover {
      width: 120px;
      height: 120px;
      margin-top: -30px;
      }

      /* Right side */
      .app:hover + .app {
      transition: 0.2s;
      width: calc(110px + var(--dock-offset-right, 0px));
      height: calc(110px + var(--dock-offset-right, 0px));
      margin-top: calc(-20px + var(--dock-offset-right, 0px) * -1);
      }

      .app:hover + .app + .app {
      transition: 0.2s;
      width: calc(100px + var(--dock-offset-right, 0px));
      height: calc(100px + var(--dock-offset-right, 0px));
      margin-top: calc(-10px + var(--dock-offset-right, 0px) * -1);
      }

      /* Left side */
      .app:has(+ .app:hover){
      transition: 0.2s;
      width: calc(110px + var(--dock-offset-left, 0px));
      height: calc(110px + var(--dock-offset-left, 0px));
      margin-top: calc(-20px + var(--dock-offset-left, 0px) * -1);
      }

      .app:has(+ .app + .app:hover){
      transition: 0.2s;
      width: calc(100px + var(--dock-offset-left, 0px));
      height: calc(100px + var(--dock-offset-left, 0px));
      margin-top: calc(-10px + var(--dock-offset-left, 0px) * -1);
      }
  }
</style>