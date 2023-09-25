const getDonations = () => {
  const storedDonations = localStorage.getItem("donations");
  if (storedDonations) {
    return JSON.parse(storedDonations);
  } else {
    return [];
  }
};

const addToDonations = (id) => {
  const storedDonations = getDonations();
  storedDonations.push(id);
  localStorage.setItem("donations", JSON.stringify(storedDonations));
};

export { getDonations, addToDonations };