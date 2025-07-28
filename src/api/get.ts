import { sanity } from '../lib/sanityClient';

export const testSanityConnection = async () => {
  try {
    const result = await sanity.fetch('*[_type == "team"] | count');
    return result;
  } catch (error) {
    console.error('❌ Sanity connection test failed:', error);
    throw error;
  }
};

// Query to get all team members
export const getAllTeamMembers = async () => {
  const query = `*[_type == "team"] {
    _id,
    fullName,
    title,
    "imageUrl": image.asset->url
  } | order(fullName asc)`;
  
  try {
    const teamMembers = await sanity.fetch(query);

    return teamMembers;
  } catch (error) {
    console.error('❌ Error fetching team members:', error);
    throw error;
  }
};

// Query to get all history items
export const getAllHistoryItems = async () => {
  const query = `*[_type == "history"] {
    _id,
    date,
    title,
    points
  } | order(date desc)`;
  
  try {
    const historyItems = await sanity.fetch(query);
    return historyItems;
  } catch (error) {
    console.error('❌ Error fetching history items:', error);
    throw error;
  }
};

// Query to get all FAQ items
export const getAllFaqItems = async () => {
  const query = `*[_type == "faq"] {
    _id,
    question,
    answer
  } | order(_createdAt asc)`;
  
  try {
    const faqItems = await sanity.fetch(query);
    return faqItems;
  } catch (error) {
    console.error('❌ Error fetching FAQ items:', error);
    throw error;
  }
};

export const getAllData = async () => {
  try {
    const [teamMembers, historyItems, faqItems] = await Promise.all([
      getAllTeamMembers(),
      getAllHistoryItems(),
      getAllFaqItems()
    ]);
    
    return {
      teamMembers,
      historyItems,
      faqItems
    };
  } catch (error) {
    console.error('Error fetching all data:', error);
    throw error;
  }
};