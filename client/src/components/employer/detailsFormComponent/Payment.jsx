export default function Payment() {
  return (
    <div className="bg-gray-300 mx-10 my-32 rounded-lg flex flex-col justify-start p-2 gap-5">
      <div>
        <h1 className="text-2xl font-semibold">Choose Payment Method</h1>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <input type="radio" name="payment" value="eSewa" />
        </div>
        <div className="text-lg">eSewa</div>
      </div>

      <div className="mt-5">
        <button className="bg-primary w-full text-white rounded-lg px-4 py-2">
          Pay Now
        </button>
      </div>
    </div>
  );
}
