import { Scope, Type } from '@nestjs/common';
import { SCOPE_OPTIONS_METADATA } from '@nestjs/common/constants';
import { ContextId, ModuleRef } from '@nestjs/core';

export async function resolve<T>(
  moduleRef: ModuleRef,
  provider: Type<T>,
  contextId: ContextId,
): Promise<T> {
  const metadata = Reflect.getMetadata(SCOPE_OPTIONS_METADATA, provider);
  const scope = metadata?.scope || Scope.DEFAULT;

  if (scope === Scope.TRANSIENT) {
    return moduleRef.create(provider, contextId);
  } else {
    return moduleRef.resolve(provider, contextId);
  }
}
