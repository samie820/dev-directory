<template>
    <div :class="['h-12 relative', classes]" :style="{boxShadow: checkedState ? '2px 4px 20px rgba(0, 0, 0, 0.15)' : 'none'}">
        <label class="w-full h-full items-center justify-center">
            <input ref="input" type="radio" :name="name" :value="initialVal" @change="emitChecked" :checked="checkedState">
            <span class="flex justify-center items-center" v-text="value"></span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'CategoryRadio',
    props: {
        classes: String,
        name: String,
        value: String
    },
    mounted() {
        const self = this
        this.initialVal = this.value
    },
    data() {
        return  {
            initialVal: '',
            checkedState: false
        }
    },
    methods: {
        emitChecked: function(event) {
            this.checkedState = !this.checkedState
            this.$emit('input', this.initialVal)
        }
    }
}
</script>

<style lang="scss" scoped>
[type="radio"] {
  & + span::before,
  & + span::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    z-index: -10;
    transition: 0.5s ease;
  }
  &:not(:checked),
  &:checked {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    & + span {
      position: relative;
      cursor: pointer;
      height: 100%;
      width: 100%;
      transition: 0.5s ease;
    }
  }
  &:checked {
    & + span::before {
      background-color: black;
      border-radius: 0.25rem;
    }

    & + span {
      color: white;
    }
  }
  &:not(:checked) {
    & + span::after,
    & + span::before {
      border: solid 1.5px black;
      border-radius: 0.25rem;
    }
  }
}
</style>