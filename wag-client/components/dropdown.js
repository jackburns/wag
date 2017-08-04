const Dropdown = function({ list, handleSelect, show }) {
  return (
    <div className="dropdown" style={{ display: show ? "block" : "none" }}>
      {list.map(value =>
        <p key={value.id} onMouseDown={handleSelect.bind(null, value.id)}>
          {value.name}
        </p>
      )}
      <style jsx>{`
        .dropdown {
          position: absolute;
          background: white;
          z-index: 10;
          margin-top: 3px;
          width: 100%;
          max-height: 300px;
          overflow-y: scroll;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px;
        }
        p {
          margin-left: 1em;
          margin-right: 1em;
        }
        p:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Dropdown;
