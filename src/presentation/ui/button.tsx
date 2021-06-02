export default function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-black text-white w-full p-4 rounded-2xl mt-9 raleway font-bold text-md hover:bg-gray-800 transition-all duration-700"
      {...props}
    />
  );
}
