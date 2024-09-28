import { FaArrowUp, FaUser } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { GiRoundStar } from "react-icons/gi";
export default function Home() {
  return (
    <div className="container">
      <div className="grid-item">
        <p className="item-heading text-white">
          Social Media 10x Faster with AI
        </p>
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <p className="text-white">Over 4,000 5-star reviews</p>
      </div>
      <div className="grid-item">
        <div className="social">
          <div className="social-handles">
            <div className="social-icon">
              <FaInstagram size={18} color="var(--clr-purple-500)" />
            </div>
            <div className="handle">
              <p className="fs-md font-semibold">@YourCo</p>
              <p className="fs-sm">12K Followers</p>
            </div>
          </div>
          <div className="social-handles">
            <div className="social-icon">
              <RiTwitterXFill size={18} color="var(--clr-purple-500)" />
            </div>
            <div className="handle">
              <p className="fs-md font-semibold">@YourCo</p>
              <p className="fs-sm">8K Followers</p>
            </div>
          </div>
        </div>
        <p className="item-heading">Manage multiple accounts and platforms.</p>
      </div>
      <div className="grid-item">
        <p className="item-heading">Maintain a consistent posting schedule</p>
        <div className="posting-schedule">
          <div className="date">
            <p className="fs-xs">September 2024</p>
            <p className="fs-xs">Week 1</p>
          </div>

          <div className="days">
            <div className="schedule">
              <div
                className="schedule-icon"
                data-post-check="on-schedule"
              ></div>
              <div className="box"></div>
            </div>
            <div className="schedule">
              <div
                className="schedule-icon"
                data-post-check="on-schedule"
              ></div>
              <div className="box"></div>
            </div>
            <div className="schedule">
              <div
                className="schedule-icon"
                data-post-check="on-schedule"
              ></div>
              <div className="box"></div>
            </div>
            <div className="schedule">
              <div
                className="schedule-icon"
                data-post-check="on-schedule"
              ></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item">
        <p className="item-heading">Schedule to social media.</p>
        <div className="best-time-to-post">
          <p className="font-semibold">Best Time to Post</p>
          <hr />
          <div className="days-of-week">
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </div>
          <div className="chart">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar" data-most-active="most-active"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <p className="font-semibold">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      <div className="grid-item">
        <div className="follower-growth">
          <p>Follower Growth</p>
          <div>
            <p>20,642</p>
            <span className="tag" data-growth="increase">
              +400%
            </span>
          </div>
          <div className="chart">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="followers">
            <div className="follower-growth-indicator">
              <FaArrowUp size={24} color="var(--clr-purple-500)" />
            </div>
            <div className="follower-count">
              <p>Followers</p>
              <div>
                <p>89,000</p>
                <span className="tag" data-growth="increase">
                  +120%
                </span>
              </div>
            </div>
          </div>
        </div>
        <p>Grow followers with non-stop content.</p>
      </div>
      <div className="grid-item">
        <p className="item-heading">&gt;56%</p>
        <p>faster audience growth</p>
        <div className="avatars">
          <div className="avatar">
            <FaUser size={28} />
          </div>
          <div className="avatar">
            <FaUser size={28} />
          </div>
          <div className="avatar">
            <FaUser size={28} />
          </div>
        </div>
      </div>
      <div className="grid-item">
        <div className="item">
          <p className="item-heading">
            Create and schedule content{" "}
            <em style={{ color: "var(--clr-purple-500)" }}>quicker.</em>
          </p>
          <button>
            Create Post <GiRoundStar color="var(--clr-purple-500)" />
          </button>
        </div>
        <div className="item">
          <p className="item-heading">Write your content using AI.</p>
          <div className="chats">
            <div className="chat">
              <p className="msg user-msg">
                Give me 5 tips to grow my follower on Instagram
              </p>
              <div className="chat-avatar user-avatar">
                <FaUser />
              </div>
            </div>
            <div className="chat">
              <div className="chat-avatar ai-avatar">
                <GiRoundStar color="var(--clr-purple-500)" />
              </div>
              <p className="msg ai-response">
                Certainly! Here are five tips to help you grow your Instagram
              </p>
            </div>

            <div className="up-icon">
              <div className="inner">
                <FaArrowUp size={24} color="var(--clr-purple-500)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
