export function PageHeaderA() {
  return (
    <nav className="container mx-auto my-6">
      <div className="p-2 text-center">
        <a
          href="/"
          className="p-4 font-brand bg-transparent hover:bg-ryan-black-transparent border border-transparent hover:border-red-600 transition-all duration-300 rounded uppercase text-3xl tracking-wider"
        >
          Ryan Rampersad
        </a>
      </div>
    </nav>
  );
}

export function PageHeaderB() {
  const text = "Ryan Rampersad";

  let selections = (() => {
    const maxSelect = 2;
    let selections: number[] = [];
    while (selections.length < maxSelect) {
      const random = Math.floor(Math.random() * text.length);
      const ch = text.charAt(random);

      if (ch === " ") {
        continue;
      }
      if (selections.includes(random)) {
        continue;
      }

      selections.push(random);
    }

    return selections;
  })();

  const jsx = text.split("").map((ch, index) => {
    const isSelected = selections.includes(index);
    if (isSelected) {
      return (
        <span key={index} className="group-hover:bg-red-500">
          {ch}
        </span>
      );
    }
    return <span key={index}>{ch}</span>;
  });

  return (
    <nav className="container mx-auto my-6">
      <div className="p-2 text-center">
        <a
          href="/"
          className="p-4 font-brand bg-transparent hover:bg-ryan-black-transparent border border-transparent hover:border-red-600 transition-all duration-300 rounded uppercase text-3xl tracking-wider group"
        >
          {jsx}
        </a>
      </div>
    </nav>
  );
}

export function PageHeader() {
  const text = "Ryan Rampersad";

  const jsx = text.split("").map((ch, index) => {
    const delay = `${100 * index}ms`;

    return (
      <span
        key={index}
        className="group-hover:bg-red-500 duration-75 ease-linear transition-all"
        style={{ transitionDelay: delay }}
      >
        {ch}
      </span>
    );
  });

  return (
    <nav className="container mx-auto my-6">
      <div className="p-2 text-center">
        <a
          href="/"
          className="p-4 font-brand bg-transparent hover:bg-ryan-black-transparent border border-transparent hover:border-red-600 transition-all duration-300 rounded uppercase text-3xl tracking-wider group"
        >
          {jsx}
        </a>
      </div>
    </nav>
  );
}
