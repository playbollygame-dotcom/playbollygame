import {
  FaGift,
  FaCoins,
  FaUserFriends,
  FaBolt,
} from "react-icons/fa";

const rewards = [
  {
    icon: <FaGift />,
    title: "Welcome Bonus",
    desc: "Get an exciting bonus when you download and register.",
  },
  {
    icon: <FaCoins />,
    title: "Daily Rewards",
    desc: "Claim daily rewards and enjoy special bonus events.",
  },
  {
    icon: <FaUserFriends />,
    title: "Referral Program",
    desc: "Invite friends and earn exciting referral rewards.",
  },
  {
    icon: <FaBolt />,
    title: "Instant Updates",
    desc: "Always stay updated with the latest APK version.",
  },
];

export default function ExclusiveRewards() {
  return (
    <section className="bg-[#081018] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-500/20 px-5 py-2 text-green-400">
            Rewards
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Exclusive Rewards
          </h2>

          <p className="mt-5 text-gray-400">
            Unlock amazing bonuses and enjoy exciting gaming benefits.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {rewards.map((reward) => (

            <div
              key={reward.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,.35)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-3xl text-white">
                {reward.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {reward.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {reward.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}