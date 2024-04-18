const Delete = ({ text, accion, setModal }) => {
  return (
    <div className="fixed z-10 top-0 left-0 bottom-0 right-0 bg-neutral-600/50 grid place-content-center">
      <div className="w-80 min-h-96 bg-neutral-50 rounded-lg border-2 border-neutral-600 py-6 px-6 grid place-content-center gap-10">
        <h1 className="font-bold text-center text-xl leading-none">{text}</h1>
        <div className="flex gap-2">
          <button
            className="w-1/2 h-10 bg-neutral-50 rounded-lg border-2 "
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            onClick={accion}
            className="w-1/2 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export { Delete };
