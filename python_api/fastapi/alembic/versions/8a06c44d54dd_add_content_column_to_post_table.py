"""add content column to post table

Revision ID: 8a06c44d54dd
Revises: b4b78a505422
Create Date: 2022-12-28 22:09:49.809080

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8a06c44d54dd'
down_revision = 'b4b78a505422'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column('posts', sa.Column('content', sa.String(), nullable=False))
    pass


def downgrade() -> None:
    op.drop_column('posts', 'content')
    pass
