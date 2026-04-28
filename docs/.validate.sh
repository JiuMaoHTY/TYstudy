#!/bin/bash
# 验证 docs/ 下所有 .md 文件的 frontmatter 格式
# 用法: bash docs/.validate.sh

errors=0
total=0

for md in $(find docs -name "*.md" -not -path "*/templates/*" -not -path "docs/README.md"); do
  total=$((total + 1))

  # 检查 frontmatter 分隔符
  if ! head -1 "$md" | grep -q "^---$"; then
    echo "  MISSING FRONTMATTER: $md"
    errors=$((errors + 1))
    continue
  fi

  # 检查必填字段
  for field in type zone tags date; do
    if ! head -20 "$md" | grep -q "^${field}:"; then
      echo "  MISSING '$field': $md"
      errors=$((errors + 1))
    fi
  done
done

echo ""
echo "Checked $total files, $errors error(s)"
[ $errors -eq 0 ] && echo "ALL PASS" || echo "FIX REQUIRED"
