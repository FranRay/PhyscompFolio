
<template>
      <nav ref={dockRef} className="dock">
        <ul>
          <li className="app gap" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/L-AboutMe.png"/>
              <span className="tooltip">About Me</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/L-GraphicDesign.png" />
              <span className="tooltip">Graphic Design</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/L-UXUI.png" />
              <span className="tooltip">UX/UI</span>
            </a>
          </li>
          <li className="app gap" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="../images/icons/L-OtherWork.png" />
              <span className="tooltip">Other Work</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.linkedin.com/in/franraymundo" target="_blank">
              <img src="../images/icons/L-LinkedIn.png" />
              <span className="tooltip">LinkedIn</span>
            </a>
          </li>
          <li className="app gap" onMouseMove={handleAppHover}>
            <a href="https://www.behance.net/franraymundo" target="_blank">
              <img src="../images/icons/L-Behance.png" />
              <span className="tooltip">Behance</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a @click="$emit('light-toggle')">
              <img src="../images/icons/L-ToggleTheme.png" />
              <span className="tooltip">Toggle Theme</span>
            </a>
          </li>
        </ul>
      </nav>
</template>
    
    <style scoped lang = "scss">
      .dock {
        margin: auto auto 1em auto;
        padding: 0 1em;
        border-radius: 5em;
        box-shadow: inset 0px 3px 10px -6px #ffffff50, 0px 5px 10px 0px #00000025;
      }
    
      .dock ul {
        display: flex;
        list-style-type: none;
        padding: 0;
      }
    
      nav {
          .app {
            transition: width, height, margin-top, cubic-bezier(0.25, 1, 0.5, 1) 100ms;
            width: 60px;
            height: 60px;
            position: relative;
            padding-inline: 0.25em;
    
            img {
              width: 100%;
              height: 100%;
            }
    
            a {
              width: 100%;
              height: 100%;
              display: block;
              border-radius: 12px;
              color: #555;
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
            transition: ease-in opacity 300ms;
            display: block;
            background: #242424;
            padding-inline: 0.75em;
            border-radius: 0.25em;
            height: 1.5em;
            width: auto;
            white-space: nowrap;
          }

          .gap {
            padding-right: 2em;

            .tooltip {
              left: 40%;
            }
          }
    
          // app animation related
    
          .app:hover {
          width: 90px;
          height: 90px;
          margin-top: -30px;
          }
    
          /* Right side */
          .app:hover + .app {
          transition: 0.2s;
          width: calc(80px + var(--dock-offset-right, 0px));
          height: calc(80px + var(--dock-offset-right, 0px));
          margin-top: calc(-20px + var(--dock-offset-right, 0px) * -1);
          }
    
          .app:hover + .app + .app {
          transition: 0.2s;
          width: calc(70px + var(--dock-offset-right, 0px));
          height: calc(70px + var(--dock-offset-right, 0px));
          margin-top: calc(-10px + var(--dock-offset-right, 0px) * -1);
          }
    
          /* Left side */
          .app:has(+ .app:hover){
          transition: 0.2s;
          width: calc(80px + var(--dock-offset-left, 0px));
          height: calc(80px + var(--dock-offset-left, 0px));
          margin-top: calc(-20px + var(--dock-offset-left, 0px) * -1);
          }
    
          .app:has(+ .app + .app:hover){
          transition: 0.2s;
          width: calc(70px + var(--dock-offset-left, 0px));
          height: calc(70px + var(--dock-offset-left, 0px));
          margin-top: calc(-10px + var(--dock-offset-left, 0px) * -1);
          }
      }
</style>