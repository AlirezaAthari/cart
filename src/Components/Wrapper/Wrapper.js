function Wrapper(WrappedComponent, className) {
  return () => {
    return (
      <div className={className}>
        <WrappedComponent/>
      </div>
    );
  };
}

export default Wrapper;
