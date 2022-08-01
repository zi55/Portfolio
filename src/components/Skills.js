import React from "react";
import "../Style/ContainerSkills.css";
import "../Animation/Animation";
import { NavLink } from "react-router-dom";
export default function Skills({ arrLink }) {
  return (
    <div className="Container-Skills reveal">
      <h1>SKILLS</h1>

      {arrLink.map((val, i) => {
        return (
          <NavLink key={i} to={val.url}>
            <div className="flex-block-skills">
              <div className="Block-skill">
                <span className="span-skills">{val.txt}</span>
                <div className="flex-skill">
                  <div>{val.txt000}</div>
                  <div>{val.txt001}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt002}</div>
                  <div>{val.txt003}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white1"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt004}</div>
                  <div>{val.txt005}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white2"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt006}</div>
                  <div>{val.txt007}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white3"></div>
                  <i className="bx bxs-circle"></i>
                </div>
              </div>

              <div className="Block-skill">
                <span className="span-skills">{val.txt1}</span>
                <div className="flex-skill">
                  <div>{val.txt008}</div>
                  <div>{val.txt009}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt010}</div>
                  <div>{val.txt011}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white1"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt012}</div>
                  <div>{val.txt013}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white3"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt014}</div>
                  <div>{val.txt015}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white6"></div>
                  <i className="bx bxs-circle"></i>
                </div>
              </div>

              <div className="Block-skill">
                <span className="span-skills">{val.txt2}</span>
                <div className="flex-skill">
                  <div>{val.txt016}</div>
                  <div>{val.txt017}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt018}</div>
                  <div>{val.txt019}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white1"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt020}</div>
                  <div>{val.txt021}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white4"></div>
                  <i className="bx bxs-circle"></i>
                </div>
                <div className="flex-skill">
                  <div>{val.txt022}</div>
                  <div>{val.txt023}</div>
                </div>
                <div className="solid-px1 flex-circle">
                  <div className="solid-white3"></div>
                  <i className="bx bxs-circle"></i>
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
