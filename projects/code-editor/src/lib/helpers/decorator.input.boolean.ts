export function convertToBoolean(value?: any): boolean {
  return value ? value !== 'false' : value === '';
}
export function BooleanInput<K extends string, T extends Record<K, any>>(target: T, key: K): any {

  const privateKey = '$$' + key as '$$privateKey';

  const propertyDescriptor = Object.getOwnPropertyDescriptor(target, key);

  if (propertyDescriptor) {
    if (!propertyDescriptor.configurable) {
      throw new Error(`BooleanInput is not able to replace a property "${key}".`);
    }
    Object.defineProperty(target, privateKey, propertyDescriptor);
  }

  const newPropertyDescriptor: TypedPropertyDescriptor<boolean> = {
    configurable: true,
    enumerable: false,
    get(this: Record<typeof privateKey, boolean>) {
      return this[privateKey] || false;
    },
    set(this: Record<typeof privateKey, boolean>, Bvalue: any) {
      this[privateKey] = convertToBoolean(Bvalue);
    },
  };

  if (arguments.length < 3) {
    return Object.defineProperty(target, key, newPropertyDescriptor);
  } else {
    return newPropertyDescriptor;
  }
}
