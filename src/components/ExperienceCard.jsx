export default function ExperienceCard({ role, company, date, location, points }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-teal-400 transition">
      <h3 className="text-xl font-semibold text-white">{role}</h3>
      <p className="text-teal-400 font-medium mt-1">{company}</p>
      <p className="text-sm text-zinc-400 mt-1">
        {date} • {location}
      </p>

      <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-zinc-300">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
