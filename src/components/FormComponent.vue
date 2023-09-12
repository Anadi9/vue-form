<template>
  <div>
    <!-- Form fields go here -->
    <div class="mb-4">
      <label for="field1" class="block font-bold">Field 1</label>
      <input v-model="field1" @input="updateField('field1')" type="text" id="field1" class="w-full p-2 border rounded">
    </div>
    <div class="mb-4">
      <label for="field2" class="block font-bold">Field 2</label>
      <input v-model="field2" @input="updateField('field2')" type="text" id="field2" class="w-full p-2 border rounded">
    </div>
    <div class="mb-4">
      <label for="field3" class="block font-bold">Field 3</label>
      <input v-model="field3" @input="updateField('field3')" type="text" id="field3" class="w-full p-2 border rounded">
    </div>
    <div class="mb-4">
      <label for="field4" class="block font-bold">Field 4</label>
      <input v-model="field4" @input="updateField('field4')" type="text" id="field4" class="w-full p-2 border rounded">
    </div>
    <div class="mb-4">
      <label for="field5" class="block font-bold">Field 5</label>
      <input v-model="field5" @input="updateField('field5')" type="text" id="field5" class="w-full p-2 border rounded">
    </div>
    <!-- Completion Percentage -->
    <div class="mt-4">
      Completion Percentage: {{ completionPercentage }}%
    </div>
  </div>
</template>

<script>
import { db } from '../firebaseConfig.js';

export default {
  data() {
    return {
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
    };
  },
  computed: {
    completionPercentage() {
      const completedFields = [
        this.field1,
        this.field2,
        this.field3,
        this.field4,
        this.field5,
      ].filter((field) => !!field);

      return ((completedFields.length / 5) * 100).toFixed(2); // Assuming 5 fields in total
    },
  },
  methods: {
    updateField(fieldName) {
      // Update Firestore document when a field changes
      const userRef = db.collection("form_data").doc(kws0Ak0Ur03OUipOMg47); // Replace with the user's unique identifier

      // Use the set method to update a specific field
      userRef
        .update({
          [fieldName]: this[fieldName],
        })
        .then(() => {
          console.log(`Field '${fieldName}' saved to Firestore.`);
        })
        .catch((error) => {
          console.error(`Error saving field '${fieldName}' to Firestore:`, error);
        });
    },
  },
};
</script>

<style scoped>
/* Style for form container */
.container {
  max-width: 400px;
  margin: 0 auto;
}

/* Style for form fields */
.mb-4 {
  margin-bottom: 1rem;
}

.block {
  display: block;
}

.font-bold {
  font-weight: bold;
}

.w-full {
  width: 100%;
}

.p-2 {
  padding: 0.5rem;
}

.border {
  border: 1px solid #ccc;
}

.rounded {
  border-radius: 0.25rem;
}

/* Style for completion percentage */
.mt-4 {
  margin-top: 1rem;
  font-weight: bold;
}
</style>

