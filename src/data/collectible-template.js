// FINICKY BEE COLLECTIBLE RECORD TEMPLATE
// Copy this object when creating a new FB-#### record.
// Do NOT import this file into the website.

{
  id: "replace-with-slug",
  documentaryNumber: "FB-0000",
  archiveNumber: "FBA-0000",

  title:
    "Replace with factual marketplace/listing title or established title",

  editorialTitle:
    "Replace with documentary/editorial title",

  shortDescription:
    "Brief factual description of the collectible.",

  object: {
    makerOrAttribution:
      "Maker, manufacturer, attribution, or Undetermined",
    objectType:
      "Object type",
    style:
      "Style, series, pattern, or design tradition",
    countryOfOrigin:
      "Country of origin or Undetermined",
    material:
      "Material",
    productionPeriod:
      "Established period or Undetermined",
  },

  dimensions: {
    diameter: "If applicable",
    height: "If applicable",
    width: "If applicable",
    depth: "If applicable",
  },

  condition: {
    summary:
      "Concise condition summary",
    observed:
      "Directly observed or source-supported condition information",
    additional:
      "Additional documented condition information",
  },

  story: {
    heading:
      "Short documentary/story heading",

    paragraphs: [
      "Factual story paragraph.",
      "Factual observation or documented context.",
      "Why this object is being preserved and documented.",
    ],
  },

  documentary: {
    url:
      "https://youtu.be/REPLACE",
    description:
      "Brief description of the documentary.",
  },

  research: {
    objectIdentification:
      "What the object is identified as, with attribution level stated.",

    physicalDescription:
      "Physical description based on observable evidence.",

    productionPeriodNote:
      "Established date, estimated period, or explanation of why the period remains undetermined.",

    attributionNote:
      "Explain the evidence supporting the maker/manufacturer attribution and any uncertainty.",
  },

  documentation: {
    sources: [
      "Original Finicky Bee Finds documentary",
      "Original Finicky Bee photographs",
      "Marketplace or other surviving source documentation",
      "Physical examination of the surviving object",
    ],

    integrityStatement:
      "This record follows the Finicky Bee Documentation Integrity Standard. Observable facts, source-attributed information, research-based assessments, and unresolved historical questions are distinguished. No appraisal or valuation is provided.",
  },

  storyPhotoIndex: 1,

  photos: [
    {
      src:
        "/images/finds/FB-0000/REPLACE.jpg",
      alt:
        "Factual description of the photograph",
    },
  ],

  sections: {
    storyLabel: "THE STORY",
    documentaryLabel: "THE DOCUMENTARY",
    archiveLabel: "COLLECTIBLE ARCHIVE RECORD",
    photographicRecordLabel: "PHOTOGRAPHIC RECORD",
  },

  image:
    "/images/finds/FB-0000/REPLACE.jpg",

  findSlug:
    "replace-with-slug",

  featured: false,

  // Add only when Founder intentionally approves this collectible
  // as a candidate for a homepage feature:
  // documentaryFeatureCandidate: true,
  // archiveFeatureCandidate: true,
},